<?php
/**
 * @author Jan Foerste <me@janfoerste.de>
 */

namespace Manager\Http\Controllers;

use Manager\Http\View\View;

class PageController
{
    public function home()
    {
        $view = new View('template');
        $view->set('title', 'Home')
            ->set('test', 'Variable')
            ->set('content', 'pages:home');

        return $view->make();
    }
}