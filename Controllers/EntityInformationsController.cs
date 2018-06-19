using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{

    [Produces("application/json")]
    public class EntityInformationsController : Controller
    {

        DataAccessLayer objuser = new DataAccessLayer();

        [HttpPost]
        [Route("api/addEntityInfo")]
        public int Create([FromBody] EntityInformations entityInformations)
        {
            return objuser.AddEntityInfo(entityInformations);
        }
    }
}