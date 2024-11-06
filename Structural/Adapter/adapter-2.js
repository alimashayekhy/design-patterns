// This is the interface or format that the application expects for user data.
class User {
    constructor(fullName, age, email) {
        this.fullName = fullName;
        this.age = age;
        this.email = email;
    }
}

// This is the legacy server response format.
class LegacyUserService {
    getUserData() {
        // Simulating a legacy API response
        return {
            first_name: "John",
            last_name: "Doe",
            birth_year: 1993,
            email_address: "john@example.com"
        };
    }
}

// The adapter will convert the legacy format into the new format expected by the application.
class UserAdapter {
    constructor(legacyUserService) {
        this.legacyUserService = legacyUserService;
    }

    getUser() {
        // Get user data in the legacy format
        const legacyData = this.legacyUserService.getUserData();

        // Convert to the new format
        const fullName = `${legacyData.first_name} ${legacyData.last_name}`;
        const age = new Date().getFullYear() - legacyData.birth_year;
        const email = legacyData.email_address;

        // Return data in the format expected by the application
        return new User(fullName, age, email);
    }
}

// Now, the application can use UserAdapter to retrieve user data in the correct format without worrying about the legacy data format.
// Client code
function displayUserInfo(user) {
    console.log(`Name: ${user.fullName}`);
    console.log(`Age: ${user.age}`);
    console.log(`Email: ${user.email}`);
}

// Using the adapter to get user data in the correct format
const legacyUserService = new LegacyUserService();
const userAdapter = new UserAdapter(legacyUserService);

const adaptedUser = userAdapter.getUser();
displayUserInfo(adaptedUser);
