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

Stage 3:
    Problem: there is no index, sorting on createdAt which takes more time and accessing all the data which is not required.
    Optimized Query: 
        select id, type, message, createdAt from notifications where studentId = 1042 and isRead = false order by createdAt desc limit 10;
    Solution: so this query does not access all the data only the required one are asked.

