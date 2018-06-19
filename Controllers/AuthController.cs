//using System;
//using System.Collections.Generic;
//using System.IdentityModel.Tokens.Jwt;
//using System.Linq;
//using System.Security.Claims;
//using System.Text;
//using System.Threading.Tasks;
//using CoreWithAngular5.Models;
//using Microsoft.AspNetCore.Http;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.IdentityModel.Tokens;

//namespace CoreWithAngular5.Controllers
//{
//    [Produces("application/json")]
//    [Route("api/Auth")]
//    public class AuthController : Controller
//    {
//        private UserManager<User> userManager;

//        public AuthController(UserManager<User> userManager)
//        {
//            this.userManager = userManager;
//        }
//        [HttpPost]
//        [Route("login")]
//        public async Task<IActionResult> login([FromBody] LoginViewModel modal)
//        {
//            var user = await userManager.FindByNameAsync(modal.UserName);
//            if (user != null && await userManager.CheckPasswordAsync(user, modal.Password))
//            {
//                var claims = new[]
//                {
//                    new Claim(JwtRegisteredClaimNames.Sub, user.UserName),
//                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())

//                };
//                var signingKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("MySecureKey"));
//                var token = new JwtSecurityToken(
//                    issuer: "http://localhost:49654",
//                    audience: "http://localhost:49654",
//                    expires: DateTime.UtcNow.AddHours(1),
//                    claims: claims,
//                    signingCredentials: new Microsoft.IdentityModel.Tokens.SigningCredentials(signingKey, SecurityAlgorithms.HmacSha256)
//                    );
//                return Ok(new
//                {
//                    token = new JwtSecurityTokenHandler().WriteToken(token),
//                    expiration = token.ValidTo
//                });
//            }
//            return Unauthorized();
//        }
//    }
//}