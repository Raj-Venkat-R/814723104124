import axios from "axios";

const BASE_URI="http://20.207.122.201/evaluation-service";
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiI4MTQ3MjMxMDQxMjRAdHJwLnNybXRyaWNoeS5lZHUuaW4iLCJleHAiOjE3Nzc2OTg2NjgsImlhdCI6MTc3NzY5Nzc2OCwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6IjA1ZDUxZmM0LWExYjQtNDFkMy04NGY2LTI2ZDZlYzNkMTAyNSIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6InJhaiB2ZW5rYXQgciIsInN1YiI6ImMzMTg5ZmNkLWEwNjUtNGYzMy05MTAwLWMwYzdjMmRiZTBjNSJ9LCJlbWFpbCI6IjgxNDcyMzEwNDEyNEB0cnAuc3JtdHJpY2h5LmVkdS5pbiIsIm5hbWUiOiJyYWogdmVua2F0IHIiLCJyb2xsTm8iOiI4MTQ3MjMxMDQxMjQiLCJhY2Nlc3NDb2RlIjoiUWticHhIIiwiY2xpZW50SUQiOiJjMzE4OWZjZC1hMDY1LTRmMzMtOTEwMC1jMGM3YzJkYmUwYzUiLCJjbGllbnRTZWNyZXQiOiJBYUpBV0FOS3FOZ1FRdUVtIn0.qz6H_nSxSGlA4rKv2eG5Q1_CWxyYsHzmGKODUNJqgnI";

const logger = async (stack, level, pkg, message) => {
    try {
        if(!TOKEN) console.log("Access token not found...");
        await axios.post(
            `${BASE_URI}/logs`,
            {
                stack, level, pkg, message
            },
            {
                headers: {
                    Authorization: `Bearer ${TOKEN}`,
                    "Content-Type": "application/json"
                }
            }
        )
    } catch (error) {
        console.log("ERROR: ", error.message);
    }    
}

export default logger;