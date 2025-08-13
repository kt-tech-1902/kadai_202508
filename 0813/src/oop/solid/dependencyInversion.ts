/**
 * 依存性逆転の原則
 * 違反例
 */
export {};

class User {}

class UserController {
    private userService = new UserService();

    create(user: User): User {
        return this.userService.create(user);
    }

    findById(id: string): User {
        return this.userService.findById(id);
    }
}

class UserService {
    private userRepository = new UserRdbRepository();

    create(user: User): User {
        return this.userRepository.create(user);
    }

    findById(id: string): User {
        return this.userRepository.findById(id);
    }
}

class UserRdbRepository {
    create(user: User): User {
        console.log("RDBにUserを登録");
        return user;
    }

    findById(id: string): User {
        console.log(`ID: ${id}のユーザーを検索`);
        return new User();
    }
}

function run() {
    const userController = new UserController();
    userController.findById("123");
}

run();

/**
 * 依存性逆転の原則
 * 原則に沿った形式
 */
export {};

interface IUserService {
    create(user: User): User;
    findById(id: string): User;
}

class UserController2 {
    constructor(private userService: IUserService) {
        this.userService = userService;
    }

    create(user: User): User {
        return this.userService.create(user);
    }

    findById(id: string): User {
        return this.userService.findById(id);
    }
}

interface IUserRepository {
    create(user: User): User;
    findById(id: string): User;
}

class UserService2 implements IUserService {
    constructor(private userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }
    create(user: User): User {
        return this.userRepository.create(user);
    }

    findById(id: string): User {
        return this.userRepository.findById(id);
    }
}

class UserRdbRepository2 implements IUserRepository {
    create(user: User): User {
        console.log("RDBにUserを登録");
        return user;
    }

    findById(id: string): User {
        console.log(`ID: ${id}のユーザーを検索`);
        return new User();
    }
}

class TestRepository implements IUserRepository {
    create(user: User): User {
        console.log("RDBにUserを登録");
        return user;
    }

    findById(id: string): User {
        console.log(`Test ID: ${id}のユーザーを検索`);
        return new User();
    }
}

function run2() {
    const repository = new UserRdbRepository2();
    // const repository = new TestRepository();
    const service = new UserService2(repository);
    const userController = new UserController2(service);
    userController.findById("123");
}

run2();
