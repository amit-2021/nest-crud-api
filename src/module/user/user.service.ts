import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Policy } from 'src/entity/policy.entity'; 

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(Policy)
        private PolicyRepo: Repository<any>,
    ) {}

    private readonly blogs: any[] = [{
        id:1,data:'NA'
    }]

    login(): string {
        return "login successfully";
    }

    findData(data): Promise<any> {
        // return this.blogs;
        return this.PolicyRepo.find();

    }

    create(data: any) {
        // this.blogs.push(data);
        this.PolicyRepo.create(data);
        // console.log(data);
        return "save successfully..."
    }
}
