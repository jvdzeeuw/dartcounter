<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller {
        
        public function __construct()
        {
            parent::__construct();
            // Your own constructor code
        }
		
	public function index()
	{
            $this->load->view('letsdart');
	}
        
        public function dev()
	{
            $this->load->view('develop');
	}
	  
	public function construction()
	{
            $this->load->view('construction');
	}
        
	public function scoreboard()
	{
            $this->load->view('scoreboard');
	}
}

/* End of file home.php */
/* Location: ./application/controllers/home.php */