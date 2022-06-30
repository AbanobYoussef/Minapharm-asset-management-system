using DTOs;
using Microsoft.AspNetCore.Mvc;
using Services.IService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransportAssetController : ControllerBase
    {
        private readonly IGenericService<TransportAssetDTO> _transportAssetDTO;
        public TransportAssetController(IGenericService<TransportAssetDTO> transportAssetDTO)
        {
            _transportAssetDTO = transportAssetDTO;
        }
        // GET: api/<TransportAssetController>
        [HttpGet]
        public IEnumerable<TransportAssetDTO> Get()
        {
            return _transportAssetDTO.GetALL();
        }

        // GET api/<TransportAssetController>/5
        [HttpGet("{id}")]
        public TransportAssetDTO Get(int id)
        {
            return _transportAssetDTO.GetById(id);
        }

        // POST api/<TransportAssetController>
        [HttpPost]
        public TransportAssetDTO Post([FromBody] TransportAssetDTO transportAsset)
        {
            return _transportAssetDTO.Insert(transportAsset);
        }

        // PUT api/<TransportAssetController>/5
        [HttpPut]
        public TransportAssetDTO Put([FromBody] TransportAssetDTO transportAsset)
        {
            return _transportAssetDTO.Update(transportAsset);
        }

        // DELETE api/<TransportAssetController>/5
        [HttpDelete("{id}")]
        public TransportAssetDTO Delete(int id)
        {
            return _transportAssetDTO.Delete(id);
        }
    }
}
