import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie after: ${searchingYear}`;
  }

  @Get('/:id')
  getOne(@Param('id') id: string): string {
    return `This will return one movie with the id : ${id}`;
  }

  @Post()
  create(@Body() movieData) {
    console.log('movieData : ', movieData);
    return movieData;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This will delete a movie ${id}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string, @Body() updateData) {
    return { id: movieId, ...updateData };
  }

  @Put(':id')
  put(@Param('id') id: string) {
    return `This will put a movie ${id}`;
  }
}
