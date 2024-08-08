const StatusHttp = {
  OK: {
    status: 200,
    text: "OK"
  },
  InternalServerException: {
    status: 500,
    text: "Internal Server"
  },
  BadRequest: {
    status: 400,
    text: "Bad Request"
  },
  Created: {
    status: 200,
    text: "Created"
  },
  Unauthorized: {
    status: 401,
    text: "Unauthorized"
  }
};
var StoryBlendSchemas = /* @__PURE__ */ ((StoryBlendSchemas2) => {
  StoryBlendSchemas2["User"] = "User";
  StoryBlendSchemas2["TypeAI"] = "TypeAI";
  StoryBlendSchemas2["Seguidores"] = "Seguidores";
  StoryBlendSchemas2["Notification"] = "Notification";
  StoryBlendSchemas2["MessagePrivateHeader"] = "MessagePrivateHeader";
  StoryBlendSchemas2["MessagePrivateContent"] = "MessagePrivateContent";
  StoryBlendSchemas2["likes"] = "likes";
  StoryBlendSchemas2["History"] = "History";
  StoryBlendSchemas2["Comentario"] = "Comentario";
  StoryBlendSchemas2["Capitulo"] = "Capitulo";
  return StoryBlendSchemas2;
})(StoryBlendSchemas || {});

export { StatusHttp as S, StoryBlendSchemas as a };
