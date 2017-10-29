using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Html5Css3Js.Controllers
{
    [Produces("application/json")]
    [Route("api/Test")]
    public class TestController : Controller
    {
        [HttpGet]
        public JsonResult Get()
        {
            return Json(new { FirstProperty = "some value", SecondProperty = false, ThirdProp = 123.4 });
        }
    }
}