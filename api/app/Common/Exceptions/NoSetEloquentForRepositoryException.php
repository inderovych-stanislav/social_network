<?php

namespace App\Common\Exceptions;


class NoSetEloquentForRepositoryException extends \Exception
{
    public function __construct(string $className)
    {
        $message = "No set eloquent for {$className}";
        parent::__construct($message);
    }
}
