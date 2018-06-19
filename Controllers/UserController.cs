using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{

    public class UserController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetUser")]
        public IEnumerable<User> Index()
        {
            return objuser.GetUser();

        }



        //[HttpPost]
        //[Route("api/Adduser")]
        //public int Create([FromBody] User user)
        //{
        //    return objuser.Adduser(user);
        //}
        
       
        //[HttpPost]
        //[Route("api/Login")]
        //public ActionResult Login([FromBody] LoginViewModel model)
        //{
           
        //    var myUser = objuser.GetUser()
        //    .FirstOrDefault(u => u.UserName == model.UserName
        //             && u.Password == model.Password);


        //    if (myUser != null)
        //    {
        //        return Ok();
        //    }
        //    else
        //    {
        //        return NotFound("UserName not found");
        //    }
        //    //if (ModelState.IsValid)
        //    //{
                
        //    //    var v = objuser.GetUser().ToList();
        //    //    foreach (var a in v)
        //    //    {
        //    //        if (a.UserName == model.UserName && a.Password == model.Password)
        //    //        {

        //    //            return Redirect("Dashboard");
        //    //        }

        //    //        else
        //    //        {
        //    //            return NotFound("Username not found");
        //    //            //ModelState.AddModelError(string.Empty, "Invalid login attempt.");

        //    //        }
        //    //    }
                
        //    //}

        //    //return View(model);
         
        //}
    }
}