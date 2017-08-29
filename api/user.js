const faker = require('faker');

const User = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    website: faker.internet.url(),
    address: faker.address.streetAddress() + faker.address.city() + faker.address.country(),
    bio: faker.lorem.sentences(),
    image: faker.image.avatar()
};

module.exports = () => {
    /* user list */
    let data = {
        users: []
    };

    for (let i = 0; i < 100; i++) {
        data.users.push({ id: i, name: `user${i}` });
    }



    /* userinfo */
    data.login = {
        code: 0,
        token: 'test2017',
        userinfo: {
            name: faker.name.findName(),
            age: 18
        }
    };

    return data;
};
