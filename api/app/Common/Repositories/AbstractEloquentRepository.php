<?php

namespace App\Common\Repositories;

use App\Common\Exceptions\NoSetEloquentForRepositoryException;
use Illuminate\Database\Eloquent\Model;

abstract class AbstractEloquentRepository
{
    /**
     * @var Model
     */
    protected $eloquent;

    /**
     * @return mixed
     * @throws NoSetEloquentForRepositoryException
     */
    protected function model(): Model
    {
        if (is_null($this->eloquent)) {
            throw new NoSetEloquentForRepositoryException(get_class($this));
        }
        return new $this->eloquent;
    }
}
