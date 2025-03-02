using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Stride.API.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class HomeController : ControllerBase
	{
		private readonly IConfiguration _configuration;

		public HomeController(IConfiguration configuration)
		{
			_configuration = configuration;
		}

		[HttpGet("version")]
		public IActionResult GetVersion()
		{
			var version = _configuration["ApiVersion"];
			return Ok(new { version });
		}
	}
}
