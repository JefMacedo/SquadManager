using Common;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        /// <summary>
        /// Autentica o usuário
        /// </summary>
        /// <param name="user">Username e senha do usuário</param>
        /// <returns>Ok</returns>
        [HttpPost]
        public IActionResult Login(UserModel user)
        {
            return Ok( new { response = "Está Logado!" });
        }
    }
}
