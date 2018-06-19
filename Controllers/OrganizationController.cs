using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CoreWithAngular5.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CoreWithAngular5.Controllers
{
    [Produces("application/json")]
    public class OrganizationController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet, Authorize]
        [Route("api/GetOrganizations")]
        public IEnumerable<Organization> Index()
        {
            return objuser.GetOrganizations();

        }

        [HttpPost]
        [Route("api/AddOrganization")]
        public int AddOrganization([FromBody] Organization organization)
        {
            return objuser.AddOrganization(organization);
        }

        [HttpGet]
        [Route("api/getOrgById/{organizationId}")]
        public Organization Details(int organizationId)
        {
            return objuser.GetOrganizationById(organizationId);
        }

        [HttpPut]
        [Route("api/editOrganization")]
        public int Edit([FromBody] Organization organization)
        {
            return objuser.UpdateOrganization(organization);
        }

        [HttpDelete]
        [Route("api/deleteOrganization/{organizationId}")]
        public int Delete(int organizationId)
        {
            return objuser.DeleteOrganization(organizationId);
        }
    }
}