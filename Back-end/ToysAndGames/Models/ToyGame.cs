using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace ToysAndGames.Models
{
    public class ToyGame
    {
        [Key]
        public int id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        public string name { get; set; }

        public string description { get; set; }
        
        public int age_restriction { get; set; }

        [Required(ErrorMessage = "Company is required")]
        public string company { get; set; }

        [Required(ErrorMessage = "Price is required")]
        public double price { get; set; }
    }
}
