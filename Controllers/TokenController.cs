//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Tokens.Jwt;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;
//using CoreWithAngular5.Models;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.Extensions.Configuration;
//using Microsoft.IdentityModel.Tokens;

//namespace CoreWithAngular5.Controllers
//{
//    [Produces("application/json")]
//    [Route("api/Token")]
//    public class TokenController : Controller
//    {
//        DataAccessLayer objuser = new DataAccessLayer();

//        private IConfiguration _config;

//        public TokenController(IConfiguration config)
//        {
//            _config = config;
//        }

//        [AllowAnonymous]
//        [HttpPost]
//        public IActionResult CreateToken([FromBody]LoginViewModel login)
//        {
//            IActionResult response = Unauthorized();
//            var user = Authenticate(login);

//            if (user != null)
//            {
//                var tokenString = BuildToken(user);
//                response = Ok(new { token = tokenString });
//            }

//            return response;
//        }

//        private string BuildToken(User user)
//        {
//            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
//            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

//            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
//              _config["Jwt:Issuer"],
//              expires: DateTime.Now.AddMinutes(30),
//              signingCredentials: creds);

//            return new JwtSecurityTokenHandler().WriteToken(token);
//        }

//        //[HttpPost]
//        //[Route("api/Login")]
//        //private User Authenticate([FromBody] LoginViewModel login)
//        //{
//        //    User user = null;
//        //    var myUser = objuser.GetUser()
//        //    .FirstOrDefault(u => u.UserName == login.UserName
//        //             && u.Password == login.Password);


//        //    if (myUser != null)
//        //    {
//        //        return myUser;
//        //    }
//        //    return user;

//        //}

//        //private User Authenticate(LoginViewModel login)
//        //{
//        //    User user = null;

//        //    if (login.UserName == "Bina" && login.Password == "bina123")
//        //    {
//        //        user = new User { UserName = "Mario Rossi", Email = "mario.rossi@domain.com" };
//        //    }
//        //    return user;
//        //}
//    }
//}