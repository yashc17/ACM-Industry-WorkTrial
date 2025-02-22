# ACM-Industry-Worktrial
ACM Industry trial project.

**Instructions**
Backend
1. Install Django (using pip)
2. start Django project, and copy ALL backend files into the project.
3. Install all packages and dependencies needed (Django REST framework, etc.) (necessary packages and dependencies listed below and in imports)
4. Run the Django server (python3 manage.py startserver)
Frontend
1. Install Nodejs.
2. Install react-native-cli or use expo.
3. Install required dependencies or packages (axios, react-native-charts, etc.) (necessary packages and dependencies listed below and in imports)
4. Copy ALL frontend files into folder
5. Run the project (npx expo start --clear if using expo). Make sure backend server is already up and running.

**List of Libraries and Tools Used**
Backend
1. Django
2. Django REST Framework
Frontend
1. React
2. Axios
3. react-native
4. react-native-chart-kit
5. react-native-wagmi-charts
6. 
**Explanation of Approach and Thought Processes**
I started this project with the backend, since I felt that making sure the backend API was up and running would create a solid base to build the front end around. I spent most of my time here making sure that I created the right API urls for the API that pointed to the right data with Django REST. Next, I made sure this data would be compatible with the frontend stuff by using serializers. Then, I made sure to test my backend and make sure each endpoint had the right pieces of data.
Moving on to the frontend, this was my first time working with React Native, so I spent considerable time learning how it works. I used axios since it was an easy way to fetch the data from the backend in an efficient way. I also made sure to incorporate error handling. Next, I worked on the Dashboard and spent time getting the data in the right format and displaying it with the charts. I then created the charts. Lastly, I did some style work and cleaned up some code in order to make the project look a little better.
