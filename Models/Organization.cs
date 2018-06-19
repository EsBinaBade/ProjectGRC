using System;
using System.Collections.Generic;

namespace CoreWithAngular5.Models
{
    public partial class Organization
    {
        public int OrganizationId { get; set; }
        public string OrganizationName { get; set; }
        public string LegalName { get; set; }
        public string DateAndTime { get; set; }
    }
}
