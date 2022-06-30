using DTOs;
using Microsoft.AspNetCore.Mvc;
using Services.IService;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DeviceAssetController : ControllerBase
    {
        private readonly IGenericService<DeviceAssetDTO> _deviceAsseService;
        public DeviceAssetController(IGenericService<DeviceAssetDTO> deviceAsseService)
        {
            _deviceAsseService = deviceAsseService;
        }
        // GET: api/<deviceAsseController>
        [HttpGet]
        public IEnumerable<DeviceAssetDTO> Get()
        {
            return _deviceAsseService.GetALL();
        }

        // GET api/<deviceAsseController>/5
        [HttpGet("{id}")]
        public DeviceAssetDTO Get(int id)
        {
            return _deviceAsseService.GetById(id);
        }

        // POST api/<deviceAsseController>
        [HttpPost]
        public DeviceAssetDTO Post([FromBody] DeviceAssetDTO deviceAsset)
        {
            return _deviceAsseService.Insert(deviceAsset);
        }

        // PUT api/<deviceAsseController>/5
        [HttpPut]
        public DeviceAssetDTO Put([FromBody] DeviceAssetDTO deviceAsset)
        {
            return _deviceAsseService.Update(deviceAsset);
        }

        // DELETE api/<deviceAsseController>/5
        [HttpDelete("{id}")]
        public DeviceAssetDTO Delete(int id)
        {
            return _deviceAsseService.Delete(id);
        }
    }
}
