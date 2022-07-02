using AutoMapper;
using Entities.Entities;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using Repositories.IGenericRepository;
using Repositories.UnitOfWork;
using Services.Service;

namespace TestProject
{
    [TestClass]
    public class TransportAssetServiceTest
    {
        private readonly IUnitOfWork<TransportAsset> _transportAsset;

        private IMapper _mapper;

        public TransportAssetServiceTest()
        {
            _transportAsset = new UnitOfWork<TransportAsset>();

            _mapper=new 
        }
        [TestMethod]
        public void Delete()
        {
            TransportAssetService _transportAssetService = new TransportAssetService();
        }
    }
}