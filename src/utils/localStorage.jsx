
  const employees =  [
    {
      "id": 2,
      "firstName": "Aarav",
      "email": "suraj@123",
      "password": "password123",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Report",
          "taskDescription": "Compile and submit the monthly sales report.",
          "taskDate": "2024-12-22",
          "category": "Reporting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Client Meeting",
          "taskDescription": "Attend the meeting with the new client.",
          "taskDate": "2024-12-15",
          "category": "Meeting"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Submit Proposal",
          "taskDescription": "Prepare and submit the proposal for the new project.",
          "taskDate": "2024-12-20",
          "category": "Proposal"
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    },
    {
      "id": 3,
      "firstName": "Vivaan",
      "email": "employee2@example.com",
      "password": "password456",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Code Review",
          "taskDescription": "Review the code for the recent feature update.",
          "taskDate": "2024-12-22",
          "category": "Development"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team Presentation",
          "taskDescription": "Deliver a presentation to the team on agile practices.",
          "taskDate": "2024-12-18",
          "category": "Training"
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 1,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 4,
      "firstName": "Ananya",
      "email": "employee3@example.com",
      "password": "password789",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "System Update",
          "taskDescription": "Update all servers to the latest OS version.",
          "taskDate": "2024-12-23",
          "category": "IT"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Database Backup",
          "taskDescription": "Ensure a full backup of all databases.",
          "taskDate": "2024-12-20",
          "category": "Maintenance"
        }
      ],
      "taskNumbers": {
        "active": 2,
        "newTask": 1,
        "completed": 0,
        "failed": 1
      }
    },
    {
      "id": 5,
      "firstName": "Diya",
      "email": "employee4@example.com",
      "password": "password321",
      "tasks": [
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Research Market Trends",
          "taskDescription": "Analyze and document market trends for the quarterly report.",
          "taskDate": "2024-12-15",
          "category": "Research"
        },
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Prepare Budget",
          "taskDescription": "Draft a budget plan for the next fiscal year.",
          "taskDate": "2024-12-25",
          "category": "Finance"
        }
      ],
      "taskNumbers": {
        "active": 1,
        "newTask": 2,
        "completed": 1,
        "failed": 0
      }
    },
    {
      "id": 6,
      "firstName": "Ishaan",
      "email": "employee5@example.com",
      "password": "password654",
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Customer Feedback",
          "taskDescription": "Gather and analyze customer feedback for the new product.",
          "taskDate": "2024-12-21",
          "category": "Customer Service"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Training Session",
          "taskDescription": "Complete the mandatory compliance training.",
          "taskDate": "2024-12-10",
          "category": "Compliance"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Bug Fix",
          "taskDescription": "Resolve the critical bug reported in the system.",
          "taskDate": "2024-12-18",
          "category": "Development"
        }
      ],
      "taskNumbers": {
        "active": 2,
        "newTask": 1,
        "completed": 1,
        "failed": 1
      }
    }
  ];

  const admin =  [
    {
      "id": 1,
      "firstName": "Arjun",
      "email": "admin@123",
      "password": "adminpassword"
    }
  ]



export const setLocalStorage=()=>{
localStorage.setItem('employees', JSON.stringify(employees))
localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage=()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
return {employees,admin}
  
}