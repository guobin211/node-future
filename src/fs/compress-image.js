/**
 * compress-image
 *
 * @author GuoBin on 2019-07-25
 */
'use strict';
const fs = require('fs');
const zlib = require('zlib');
const file = '/Users/guobin/idea/node-future/src/fs/2.png';
const PNG_CHUNK_TYPE = {
  // 文件头数据块
  IHDR: 'IHDR',
  // 调色板数据块
  PLTE: 'PLTE',
  // 图像数据块
  IDAT: 'IDAT',
  // 图像结束数据
  IEND: 'IEND'
};
const IHDR_FIELDS_BYTES = {
  width: 4,
  height: 4,
  bitDepth: 1,
  colorType: 1,
  compression: 1,
  filter: 1,
  interlace: 1
};

function parsePng() {
  let chuck = 0;
  const PNG_HEADER = [137, 80, 78, 71, 13, 10, 26, 10];
  const stream = fs.createReadStream(file);
  stream.pause();
  stream.on('readable', () => {
    console.log('readable');
    if (chuck === 0) {
      const head = checkHead();
      console.log(head);
      chuck++;
    } else {
      const type = readHeadAndLength();
      console.log(type);
      const info = readChunk(type);
    }
  });

  function readIHDR({name, length}) {
    const pngInfo = {width: 0, height: 0, bitDepth: 0, colorType: 0, compression: 0, filter: 0, interlace: 0, binds: 0};
    pngInfo.width = stream.read(IHDR_FIELDS_BYTES.width).readInt32BE(0);
    pngInfo.height = stream.read(IHDR_FIELDS_BYTES.height).readInt32BE(0);
    pngInfo.bitDepth = stream.read(IHDR_FIELDS_BYTES.bitDepth).readUInt8(0);
    pngInfo.colorType = stream.read(IHDR_FIELDS_BYTES.colorType).readUInt8(0);
    pngInfo.compression = stream.read(IHDR_FIELDS_BYTES.compression).readUInt8(0);
    pngInfo.filter = stream.read(IHDR_FIELDS_BYTES.filter).readUInt8(0);
    pngInfo.interlace = stream.read(IHDR_FIELDS_BYTES.interlace).readUInt8(0);
    switch (pngInfo.colorType) {
      case 0:
        pngInfo.binds = 1;
        break;
      case 2:
        pngInfo.binds = 3;
        break;
      case 3:
        throw new Error('不支持索引色');
      case 4:
        pngInfo.binds = 2;
        break;
      case 6:
        pngInfo.binds = 4;
        break;
      default:
        throw new Error('Unknown colorType')
    }
    console.log(pngInfo);
    // CRC
    const buff = stream.read(4);
    console.log({
      r: buff[0],
      g: buff[1],
      b: buff[2],
      a: buff[3]
    });
  }

  function readIDAT({name, length}) {
    let buffer = stream.read(length);
    let data = zlib.unzipSync(buffer);
    stream.read(4);
    return readHeadAndLength();
  }

  function readPLTE({name, length}) {
  }

  function readChunk({name, length}) {
    if (name && length) {
      switch (name) {
        case PNG_CHUNK_TYPE.IHDR:
          readIHDR({name, length});
          break;
        case PNG_CHUNK_TYPE.IDAT:
          readChunk(readIDAT({name, chunk}));
          break;
        case PNG_CHUNK_TYPE.PLTE:
          readPLTE({name, chunk});
          break;
        default:
          // 跳过其他数据块
          console.log('Skip',name,length);
          // length+4为data+CRC的数据长度
          stream.read(length + 4);
          stream.readChunk(readHeadAndLength());
      }
    }
  }

  function readHeadAndLength() {
    let buff = Buffer.alloc(8);
    buff = stream.read(8);
    const length = buff.readInt32BE(0);
    const name = buff.toString('utf8', 4, 8);
    return {name, length};
  }

  function checkHead() {
    let buff = Buffer.alloc(8);
    buff = stream.read(8);
    for (let i = 0; i < PNG_HEADER.length; i++) {
      const v = buff.readUInt8(i);
      if (v !== PNG_HEADER[i]) {
        throw new Error('not PNG file');
      }
    }
    return buff.toString('utf8', 1, 8);
  }
}

parsePng();
