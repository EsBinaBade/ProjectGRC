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
    
    public class ProductKeyController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpPost]
        [Route("api/checkProductKey")]
        public ActionResult CheckProductKey([FromBody] CheckProductkeyViewModel check)
        {
            var checkKey = objuser.GetProductKey()
                .FirstOrDefault(x => x.ProductKeyName == check.ProductKeyName);
            if (checkKey != null)
            {
                return Ok();
            }
            else
            {
                return NotFound("Product Key Not found");
            }
        }


        [HttpPost]
        [Route("api/AddProductKey")]
        public int Create([FromBody] ProductKey productKey)
        {
            return objuser.AddProductKey(productKey);
        }
    }
}