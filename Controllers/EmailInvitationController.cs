using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using MailKit.Security;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MimeKit;

namespace CoreWithAngular5.Controllers
{
    [Produces("application/json")]

    public class EmailInvitationController : Controller
    {

        [HttpPost]
        [Route("api/inviteAdmin")]
        public ActionResult InviteAdmin([FromBody] InviteISMSViewModel email)
        {

           
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Bina Bade", "es.bina.bade@gmail.com"));
            message.To.Add(new MailboxAddress("Admin", email.Email));
            message.Subject = "Invitation to join GRC Tool";
             
            if (email.Role == "admin")
            {
                message.Body = new TextPart("plain")

                {
                    Text = "Dear Admin," +
                    "You are invited to setup the system.Your username: Admin, Password: admin" +
                    "Click this link for login http://localhost:52865/sign-in"
                };
            }
            else if (email.Role == "ISMS")
            { 
                message.Body = new TextPart("plain")

                {
                    Text = "Dear Admin," +
            "You are invited to setup the system.Your username: ISMS, Password: ISMS@#!." +
            "Click this link for login http://localhost:52865/sign-in"
                };
        
            }

            using (var emailClient = new MailKit.Net.Smtp.SmtpClient())
            {
                emailClient.ServerCertificateValidationCallback = (s, c, h, e) => true;
                emailClient.Connect("smtp.gmail.com", 465, SecureSocketOptions.SslOnConnect);

                emailClient.Authenticate("es.bina.bade@gmail.com", "bina@251[]");

                emailClient.Send(message);
                emailClient.Disconnect(true);
            }

            return Ok();
        }


        //[HttpPost]
        //[Route("api/inviteISMS")]
        //public ActionResult InviteISMS([FromBody] InviteISMSViewModel email)
        //{


        //    var message = new MimeMessage();
        //    message.From.Add(new MailboxAddress("Bina Bade", "es.bina.bade@gmail.com"));
        //    message.To.Add(new MailboxAddress("ISMS", email.Email));
        //    message.Subject = "Inviation to join GRC Tool";

        //    message.Body = new TextPart("plain")
        //    {
        //        Text = "Dear Admin," +
        //        "You are invited to setup the system.Your username: ISMS, Password: ISMS@#!." +
        //        "Click this link for login http://localhost:52865/sign-in"
        //    };

        //    using (var emailClient = new MailKit.Net.Smtp.SmtpClient())
        //    {
        //        emailClient.ServerCertificateValidationCallback = (s, c, h, e) => true;
        //        emailClient.Connect("smtp.gmail.com", 465, SecureSocketOptions.SslOnConnect);

        //        emailClient.Authenticate("es.bina.bade@gmail.com", "bina@251[]");

        //        emailClient.Send(message);
        //        emailClient.Disconnect(true);
        //    }

        //    return Ok();
        //}
    }

}