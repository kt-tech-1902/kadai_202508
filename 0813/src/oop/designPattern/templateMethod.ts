/**
 * テンプレートメソッドパターン
 */

abstract class TestTemplate {
    test() {
        this.setup();
        this.execute();
        this.teardown();
    }
    abstract setup();
    abstract execute();
    teardown() {
        console.log("teardown");
    }
}

class ItemServiceTest extends TestTemplate {
    setup() {
        console.log("item setup");
    }

    execute() {
        console.log("item execute");
    }
}

class UserServiceTest extends TestTemplate {
    setup() {
        console.log("user setup");
    }

    execute() {
        console.log("user execute");
    }
}

const run = () => {
    const itemService = new ItemServiceTest();
    const userService = new UserServiceTest();

    itemService.test();
    userService.test();
};

run();
