        try {
            setTimeout1(() => {
                 unexistingFunction();
            }, 3000)
        } catch (error) {
            console.log('Something went wring');
        }

        function unexistingFunction(){
            a = 5;
        }

        setTimeout(() => {
            console.log('Hello!');
        }, 4000)
