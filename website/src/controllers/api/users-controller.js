const userService = require("../../services/user-services");
const path = require("path");
const pageSize = 10;

module.exports = {
  list: async (req, res) => {
    const page = Number(req.query.page) || 1;
    const offset = (page - 1) * pageSize;
    console.log("offset", offset);
    const usersApi = [];
    const users = await userService.getAllUsersApi();
    users.forEach((user) => {
      usersApi.push({
        id: user.id,
        name: user.first_name + " " + user.last_name,
        email: user.email,
        category: user.category.name,
        detail: req.headers.host + req.originalUrl + "/" + user.id,
      });
    });
    const { count } = await userService.getAllusersAndCount({
      pageSize,
      offset,
    });
    res.json({
      meta: {
        status: 200,
        total: count,
        url: req.originalUrl,
        nextPage: `${req.originalUrl.split("?")[0]}?page=${page + 1}`,
      },
      data: usersApi,
    });
  },
  detail: async (req, res) => {
    const imageUser = await userService.getImageApi(req.params.id);
    const user = await userService.getUserApi(req.params.id);
    const userApi = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      birthday: user.birthday,
      address: user.address,
      category: user.category.name,
      build_type: user.build_type.name,
      image: req.headers.host + "/images/users/" + imageUser.image,
    };
    res.json({
      meta: {
        status: 200,
        data: userApi,
        url: req.originalUrl,
      },
    });
  },
};
