<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $movies = [
            [
                'name' => 'The Pandemic: Corona',
                'slug' => 'the-pandemic-corona',
                'category' => 'Sci-fi',
                'video_url' => 'https://youtu.be/uz9OwKHUcC0?si=ZGL3T_R2u7na7Hak',
                'thumbnail' => 'https://t.ly/alihR',
                'rating' => 4.2,
                'is_featured' => true
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/UaVTIH8mujA?si=7_APOwOcn9YWEeUH',
                'thumbnail' => 'https://t.ly/A0AdI',
                'rating' => 4.1,
                'is_featured' => false
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part2',
                'category' => 'Drama',
                'video_url' => 'https://youtu.be/OA1ij0alE0w?si=D2arO_O2Nfb937Hj',
                'thumbnail' => 'https://t.ly/oOmT1',
                'rating' => 4.8,
                'is_featured' => false
            ],
        ];

        Movie::insert($movies);
    }
}
