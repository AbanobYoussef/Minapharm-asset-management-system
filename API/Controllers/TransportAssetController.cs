using DTOs;
using Entities.Hrlpers;
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
        public ResultModel<TransportAssetDTO> Get()
        {
            return _transportAssetDTO.GetALL();
        }

        // GET api/<TransportAssetController>/5
        [HttpGet("{id}")]
        public ResultModel<TransportAssetDTO> Get(int id)
        {
            return _transportAssetDTO.GetById(id);
        }

        // POST api/<TransportAssetController>
        [HttpPost]
        public Task<ResultModel<TransportAssetDTO>> Post([FromBody] TransportAssetDTO transportAsset)
        {
            return _transportAssetDTO.Insert(transportAsset);
        }

        [Route("edit")]
        [HttpPost]
        public Task<ResultModel<TransportAssetDTO>> Put([FromBody] TransportAssetDTO transportAsset)
        {
            return _transportAssetDTO.Update(transportAsset);
        }

        // DELETE api/<TransportAssetController>/5
        [Route("delete")]
        [HttpPost]
        public Task<ResultModel<TransportAssetDTO>>  Delete([FromBody] TransportAssetDTO transportAsset)
        {
            return _transportAssetDTO.Delete(transportAsset.Id);
        }
    }
}
