using DTOs;
using Entities.Hrlpers;
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
        public ResultModel<DeviceAssetDTO>  Get()
        {
            return _deviceAsseService.GetALL();
        }

        // GET api/<deviceAsseController>/5
        [HttpGet("{id}")]
        public ResultModel<DeviceAssetDTO> Get(int id)
        {
            return _deviceAsseService.GetById(id);
        }

        // POST api/<deviceAsseController>
        [HttpPost]
        public Task<ResultModel<DeviceAssetDTO>> Post([FromBody] DeviceAssetDTO deviceAsset)
        {
            return _deviceAsseService.Insert(deviceAsset);
        }


        [Route("edit")]
        [HttpPost]
        public  Task<ResultModel<DeviceAssetDTO>> Put([FromBody] DeviceAssetDTO deviceAsset)
        {
            return _deviceAsseService.Update(deviceAsset);
        }


        [Route("delete")]
        [HttpPost]
        public Task<ResultModel<DeviceAssetDTO>> Delete([FromBody] DeviceAssetDTO deviceAsset)
        {
            return _deviceAsseService.Delete(deviceAsset.Id);
        }
    }
}
