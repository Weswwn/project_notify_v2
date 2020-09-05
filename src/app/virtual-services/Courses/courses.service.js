import "@babel/polyfill";


const baseURL = `http://localhost:8000/api/course/`;
class CourseService {
    async postCourse(params) {
        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:3000/'
                },
                body: JSON.stringify({
                    subjectCode: params.subjectCode.toUpperCase(),
                    subjectNumber: params.subjectNumber.toUpperCase(),
                    sectionNumber: params.sectionNumber.toUpperCase(),
                    users: `+1${params.user}`
                })
            })
            return await response.json();
        } catch(error) {
            return {status: 'failed', msg: 'Something went wrong. Please send us an email to contact our engineers.'};
        }
    }
    async getCourse() {
        let response = await fetch(baseURL, {
            method: 'GET',
        })
        return await response.json();
    }
}
export const courseService = new CourseService();