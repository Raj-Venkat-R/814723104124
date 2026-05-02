Stage 1:
    Base URL : /api/notifications
    EndPoint: GET /api/notifications
        Query Params: 
            - limit (Number)
            - page (Number)
            - notification_type (Event | Result | Placement)
    Headers: 
        Authorization: Bearer <token>
        Content-Type: application/json
    Response:
        "notification": [
            {
                "ID": "String",
                "Type": "Event | Result | Placement",
                "Message": "String",
                "Timestamp": "datetime"
            }
        ]

Stage 2:
    DB Choie: We can use mongoDB for flexibility and scalability of notification data, also easy to horizontal scaling.
    Schema Desing:
        Notification{
            _id: objectId,
            studentId: String,
            type: "Event | Result | Placemet",
            message: String,
            isRead: boolean,
            createdAt: date
        }
    Example: db.notifications.find({
        studentId: "12345",
        isRead: false
    })
    Optimization: Pagination use limit and page