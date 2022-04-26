import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { UserService } from '../user.service';

@Controller('dashbord')
export class LoginController {

  constructor(private userService: UserService) { }

  @Get('login')
  login(): string {
    return this.userService.login();
  }

  @Post('Create')
  async blogAdd(@Body() record: any) {
    return this.userService.create(record);
  }

  @Post('list')
  async blogList(data): Promise<any> {
    return this.userService.findData(data);
  }

  @Get('param/:id')
  @HttpCode(202)
  listData(@Param() record: any): string {
    console.log(record, '=== ' + record.id)
    return "List of the user : " + record.id
  }

  @Get('list')
  filerList(@Query() record: any): string {
    console.log(record)
    return "List of the user : " + "Id- " + record.id + "name- " +record.name + "email- " + record.email
  }
}
