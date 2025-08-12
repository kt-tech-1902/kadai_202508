/**********************
 * 早期returnを使用した形
 **********************/

const today = new Date();

// ネストが深い場合
const isActiveUser = (user) => {
    if (user != null) {
        if (
            user.startDate <= today &&
            (user.endDate == null || today <= user.endDate)
        ) {
            if (user.stopped) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
};

// 早期returnを実施した場合
const isActiveUserByReturn = (user) => {
    if (user === null) return false;
    if (user.startDate > today) return false;
    if (!(user.endDate == null || today <= user.endDate)) return false;
    if (user.stopped) return false;
    return true;
};

// 少しきれいにした形
const isActiveUserClean = (user) => {
    if (!user) return false; // undefinedなども対象となる
    if (user.startDate > today) return false;
    if (user.endDate && today > user.endDate) return false;
    if (user.stopped) return false;
    return true;
};

/**********************
 * コールバック関数を使用した形
 **********************/

const getDBConnection = () => {
    return {
        startTransaction: () => {},
        endTransaction: () => {},
    };
};

const updateUsername = (data, db) => {
    /* ユーザー名の更新処理 */
};

const updatePassword = (data, db) => {
    /* パスワードの更新処理 */
};

function executeQuery(type, data) {
    const db = getDBConnection();
    db.startTransaction();

    if (type === "username") {
        updateUsername(data, db);
    } else if (type === "password") {
        updatePassword(data, db);
    }

    db.endTransaction();
}

executeQuery("username", { userId: 1, userName: "Tom" });

executeQuery("password", { userId: 1, password: "fewatewaq" });

// コールバック関数に置き換えて分岐を減らす
const updateUsernameCallBack = (data, db) => {
    /* ユーザー名の更新処理 */
};

const updatePasswordCallBack = (data, db) => {
    /* パスワードの更新処理 */
};

const executeQueryCallBack = (updateQuery, data) => {
    const db = getDBConnection();
    db.startTransaction();

    updateQuery(data, db);

    db.endTransaction();
};

executeQuery(updateUsernameCallBack, { userId: 1, userName: "Tom" });

executeQuery(updatePasswordCallBack, { userId: 1, password: "fewatewaq" });

/**********************
 * クラスを使用した形
 **********************/
class Animal {
    eat() {
        throw new Error("eat を実装して");
    }
    sleep() {
        throw new Error("sleep を実装して");
    }
}
class Dog {
    eat() {
        console.log("dog eat");
    }
    sleep() {
        console.log("dog sleep");
    }
}
class Cat {
    eat() {
        console.log("cat eat");
    }
    sleep() {
        console.log("cat sleep");
    }
}
const actAnimal = (animalType) => {
    if (animalType === "dog") {
        const dog = new Dog();
        dog.eat();
        dog.sleep();
    } else if (animalType === "cat") {
        const cat = new Cat();
        cat.eat();
        cat.sleep();
    }
};
actAnimal("dog");
actAnimal("cat");

// クラスを使用する形に
const actAnimalByClass = (animal) => {
    animal.eat();
    animal.sleep();
};

const dog = new Dog();
actAnimalByClass(dog);
const cat = new Cat();
actAnimalByClass(cat);
