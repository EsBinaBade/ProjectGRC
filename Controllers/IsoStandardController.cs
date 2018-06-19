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
    public class IsoStandardController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetIsoStandards")]
        public IEnumerable<IsoStandard> GetIsoStandards()
        {
            return objuser.GetIsoStandard();
        }

    }
}