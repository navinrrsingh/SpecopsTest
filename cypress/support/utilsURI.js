export const CyptoIntercept = {
  getAddBlogRoute: () => {
    return { method: "POST", url: "/Admin/AddBlog" };
  },
  getEditBlogRoute: () => {
    return { method: "POST", url: "/admin/EditBlog?blogID=*" };
  },

  getDeleteBlogRoute: () => {
    return { method: "POST", url: "/home/Blog?delete=*" };
  },
};

export const CyptoRequest = {
  PostLoginRoute: (username, pass) => {
    return {
      method: "POST",
      url: "/Home/Login",
      form: true,
      body: {
        userName: username,
        password: pass,
        __RequestVerificationToken: CyptoRequest.getToken(),
      },
    };
  },

  PostAddBlogRoute: (titleText, bodyText) => {
    return {
      method: "POST",
      url: "/Admin/AddBlog",
      form: true,
      body: {
        title: titleText,
        postBody: bodyText,
        __RequestVerificationToken: CyptoRequest.getToken(),
      },
    };
  },
  PostEditBlogRoute: (bID, titleText, bodyText) => {
    return {
      method: "POST",
      url: "/admin/EditBlog",
      qs: { blogID: bID },
      form: true,
      body: {
        title: titleText,
        postBody: bodyText,
        __RequestVerificationToken: CyptoRequest.getToken(),
      },
    };
  },

  GetDeleteBlogRoute: (bID) => {
    return {
      method: "GET",
      url: "/home/Blog",
      qs: { delete: bID },
      __RequestVerificationToken: CyptoRequest.getToken(),
    };
  },

  GetEditBlogRoute: (bID) => {
    return {
      method: "GET",
      url: "/admin/EditBlog",
      qs: { blogID: bID },
      __RequestVerificationToken: CyptoRequest.getToken(),
    };
  },
  getToken: () =>
    "CfDJ8FzoAqCEqBpLmPn2D5YBh851dEYRU0RYK34BOelZs3X5ZyQDEGXPGXlLSn1u3Rr9BZiH-4l7_xgpd6ZWx0wRbwOCyCbqvHtZWI2zXormgVgK4RON8QOH3_gj8nNxf2QTzqlPwLu1nwRE88z42l62Q4c",
};
