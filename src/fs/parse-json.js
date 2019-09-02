const res = {
    "id": "5d660e11f1f3be4bd73004fd",
    "projectYcontact": "{\"departMent\":\"部门名称\",\"contacts\":[{\"name\":\"联系人\",\"te\":[{\"tel\": \"\", \"email\": \"\"}]}]}"
};

console.log(res);
console.log(res.projectYcontact);
console.log(res.projectYcontact);

const projectYcontact = JSON.parse(res.projectYcontact);
console.log(projectYcontact.departMent);

