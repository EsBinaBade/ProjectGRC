using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public class IsoStandard
    {
        [Key]
        public int StandardId { get; set; }
        public string StandardName { get; set; }
    }
}
