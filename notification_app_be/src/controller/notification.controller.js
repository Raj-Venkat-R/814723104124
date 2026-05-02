import logger from "../middleware/logger.middleware.js";
import axios from "axios";

const BASE_URI="http://20.207.122.201/evaluation-service";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiI4MTQ3MjMxMDQxMjRAdHJwLnNybXRyaWNoeS5lZHUuaW4iLCJleHAiOjE3Nzc3MDQ2ODQsImlhdCI6MTc3NzcwMzc4NCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI5OWUwNDYyLTc3NDYtNDI4ZS1hYWI5LWFhYjlmYTAwODFjOSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhaiB2ZW5rYXQgciIsInN1YiI6ImMzMTg5ZmNkLWEwNjUtNGYzMy05MTAwLWMwYzdjMmRiZTBjNSJ9LCJlbWFpbCI6IjgxNDcyMzEwNDEyNEB0cnAuc3JtdHJpY2h5LmVkdS5pbiIsIm5hbWUiOiJyYWogdmVua2F0IHIiLCJyb2xsTm8iOiI4MTQ3MjMxMDQxMjQiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJjMzE4OWZjZC1hMDY1LTRmMzMtOTEwMC1jMGM3YzJkYmUwYzUiLCJjbGllbnRTZWNyZXQiOiJBYUpBV0FOS3FOZ1FRdUVtIn0.HvFpwj_yZvMmzslzYyR9NiMJS3i5wrws6_V1CVLcmkU";

const get = async (req, res) => {
    try {
        const { limit = 10, page = 1, type } = req.query;
        let url = `${BASE_URI}/notifications?limit=${limit}&page=${page}`;
        if(type) url += `&notification_type=${type}`;
        const respone = await axios.get(url, {
            headers: { 
                Authorization: `Bearer ${TOKEN}`,
                "Content-Type": "application/json"
            }
        });
        await logger("backend", "info", "controller", "Fetched Notification");
        res.json(respone.data);
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export {
    get
}