export const StatusHttp = {
    OK: {
        status: 200,
        text: 'OK'
    },
    InternalServerException: {
        status: 500,
        text: 'Internal Server'
    },
    BadRequest: {
        status: 400,
        text: 'Bad Request'
    },
    Created: {
        status: 200,
        text: "Created"
    },
    Unauthorized: {
        status: 401,
        text: "Unauthorized"
    }
}

export enum StoryBlendSchemas {
    User = 'User',
    TypeAI = 'TypeAI',
    Seguidores = 'Seguidores',
    Notification = 'Notification',
    MessagePrivateHeader= 'MessagePrivateHeader',
    MessagePrivateContent= 'MessagePrivateContent',
    likes = 'likes',
    History = 'History',
    Comentario = 'Comentario',
    Capitulo = 'Capitulo'
}