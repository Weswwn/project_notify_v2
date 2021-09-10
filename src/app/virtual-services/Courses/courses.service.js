import "@babel/polyfill";


const baseURL = `${process.env.ORIGIN}/api/course/`;
class CourseService {
    async postCourse(params) {
        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Origin': `${process.env.ORIGIN}/`
                },
                body: JSON.stringify({
                    subjectCode: params.subjectCode.toUpperCase(),
                    subjectNumber: params.subjectNumber.toUpperCase(),
                    sectionNumber: params.sectionNumber.toUpperCase(),
                    users: `+1${params.user}`
                })
            })
            return await response.json();
        } catch (error) {
            return { status: 'failed', msg: 'Something went wrong. Please send us an email to contact our engineers.' };
        }
    }
    async getCourse() {
        const response = await fetch(baseURL, {
            method: 'GET',
        })
        return await response.json();
    }

    async getTrackingStats() {
        try {
            const response = await fetch(`${baseURL}usercourse/`, {
                method: 'GET',
            })
            return await response.json();
        } catch (error) {
            return error
        }
    }
}
export const courseService = new CourseService();