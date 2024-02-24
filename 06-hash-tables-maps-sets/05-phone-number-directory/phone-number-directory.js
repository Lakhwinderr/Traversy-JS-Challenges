function phoneNumberDirectory(arr) {
    const map = new Map();
    arr.forEach(nameAndPhone => {
        const [name, phone] = nameAndPhone.split(":");
        map.set(name, phone)
    })
    return map;
}
const phoneNumbers = [
    'John:123-456-7890',
    'Jane:987-654-3210',
    'Joe:555-555-5555',
  ];
  
  console.log(phoneNumberDirectory(phoneNumbers));
module.exports = phoneNumberDirectory;
