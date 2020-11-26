        class User {
            constructor(name){
                this.acountName = name;
            }
            login(){
                console.log(`Logged in as  ${this.acountName}`);
            }
            logout(){
                console.log(`Logout successful`);
            }
        }

        class SuperAdmin extends User{
            constructor(name){
                super('SuperAdmin');
                this.name = name
            }
             
        }

        class Admin extends User{
            constructor(name){
                super('Admin')
                this.name = name
            } 
        }
               
        class Customer extends User{
            constructor(name){
                super('Customer')
                this.name = name
            } 

        } 

        const myCustomer = new Customer("Nick");
        const myAdmin = new Admin('Andrew');
        const mySuperAdmin = new SuperAdmin("John");


        mySuperAdmin.login() // in console - "Logged in as SuperAdmin"
        myAdmin.login() // in console - "Logged in as Admin"
        myCustomer.login() // in console - "Logged in as Customer"

        myCustomer.logout() // in console - "Logout successful"
        myAdmin.logout() // in console - "Logout successful"
        mySuperAdmin.logout() // in console - "Logout successful"


        console.log(mySuperAdmin instanceof SuperAdmin) // true
        console.log(mySuperAdmin instanceof User) // true
        console.log(myCustomer instanceof Customer) // true
        console.log(myAdmin instanceof Admin) // true;
