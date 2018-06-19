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
    public class ClassificationLevelController : Controller
    {
        DataAccessLayer objuser = new DataAccessLayer();

        [HttpGet]
        [Route("api/GetClassificationlevel")]
        public IEnumerable<ClassificationLevel> GetClassificationLevels()
        {
            return objuser.GetClassificationLevels();
        }

        [HttpGet]
        [Route("api/GetClassificationLevelById/{classificationLevelId}")]
        public ClassificationLevel GetClassificationLevelById(int classificationLevelId)
        {
            return objuser.GetClassificationlevelById(classificationLevelId);
        }

        [HttpPost]
        [Route("api/addClassificationLevel")]
        public int AddClassificationLevel([FromBody] ClassificationLevel classification)
        {
            return objuser.AddClassificationLevel(classification);
        }

        [HttpPut]
        [Route("api/editClassificationLevel")]
        public int Edit ([FromBody] ClassificationLevel classificationLevel)
        {
            return objuser.UpdateClassificationLevel(classificationLevel);
        }

        [HttpDelete]
        [Route("api/DeleteClassificationLevel/{classificationLevelId}")]
        public int Delete(int classificationLevelId)
        {
            return objuser.DeleteClassificationLevel(classificationLevelId);
        }
    }
}