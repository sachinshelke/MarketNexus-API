const { StatusCodes } = require("http-status-codes");

const isAuthorized = (authorizedRole) => (req, res, next) => {
  try {
    let { role } = req.user;
    if (role === authorizedRole) next();

    res.status(StatusCodes.FORBIDDEN).json({ message: "Unauthorized" });
  } catch (e) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error" });
  }
};

const isResourceOwner =
  (resourceModel, resourceId, userId) => (req, res, next) => {
    try {
      let resource = resourceModel.findById(resourceId);
      let ownerId =
        resource.modelName === "Product" ? resource.sellerId : resource.userId;

      if (ownerId === userId) next();

      res.status(StatusCodes.FORBIDDEN).json({ message: "Unauthorized" });
    } catch (e) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error" });
    }
  };
module.exports = { isAuthorized, isResourceOwner };
