using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CoreWithAngular5.Models
{
    public partial class EntityInformations
    {
        [Key]
        public int EntityInformationId { get; set; }
        public string EntityInformation { get; set; }
    }
}
