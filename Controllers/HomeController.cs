using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{
    public class HomeController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        public IActionResult Index()
        {
            return View();
        }

        //public IActionResult Dashboard1()
        //{
        //    var DataSource = objuser.GetUser().ToList();
        //    ViewBag.DataSource = DataSource;
        //    return View();
        //}
        public IActionResult Dashboard()
        {
            return View();
        }

       


        public IActionResult Error()
        {
            ViewData["RequestId"] = Activity.Current?.Id ?? HttpContext.TraceIdentifier;
            return View();
        }
    }
}
