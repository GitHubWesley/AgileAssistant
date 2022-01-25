﻿using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AgileAssistant.Web.Controllers
{
    [ApiController]
    public class ErrorController : Controller
    {
        [Route("/error")]
        [HttpGet]
        public IActionResult Error() => Problem();
    }
}
